import PinListItem from "../components/PinListItem";
import { useRef, useState } from "react";
import { Pin, getPins, addPin } from "../data/pins";
import {
    IonMenu,
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonItem,
    IonInput,
    IonModal,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip,
    IonLabel,
    useIonViewWillEnter,
    IonMenuToggle,
} from "@ionic/react";
import { addOutline, bookmarkOutline, closeCircle } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
    const [pins, setPins] = useState<Pin[]>([]);

    const addFormPin = () => {
        const newPin: Pin = {
            id: 1,
            subject: pinFormContent.subject,
            content: pinFormContent.content,
            tags: pinFormContent.tags,
            date: new Date(),
        };
        console.log(pins);
        addPin(newPin);
        console.log(pins);
        modal.current.dismiss();
    }

    const pinFormContent = {
        subject: "",
        content: "",
        tags: [],
    }

    const setFormSubject = (subject: string) => {
        pinFormContent.subject = subject;
    }
    const setFormContent = (content: string) => {
        pinFormContent.content = content;
    }
    const setFormTags = (tags: string) => {
        pinFormContent.tags.push(tags);
    }

    useIonViewWillEnter(() => {
        const pns = getPins();
        setPins(pns);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const modal = useRef<HTMLIonModalElement>(null);

    const [tags, setTags] = useState<string[]>([]);
    const removeTags = indexToRemove => {
        pinFormContent.tags = pinFormContent.tags.filter((_, index) => index !== indexToRemove);
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    }

    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    }

    return (
        <>
            <IonMenu contentId="home-page">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle auto-hide="true">
                            <IonItem routerLink="/home">
                                <IonIcon
                                    icon={bookmarkOutline}
                                    size="large"
                                    color="primary"
                                ></IonIcon>
                                Mes épingles
                            </IonItem>
                            <IonItem routerLink="/home">
                                <IonIcon
                                    icon={bookmarkOutline}
                                    size="large"
                                    color="primary"
                                ></IonIcon>
                                Thématiques
                            </IonItem>
                            <IonItem routerLink="/home">
                                <IonIcon
                                    icon={bookmarkOutline}
                                    size="large"
                                    color="primary"
                                ></IonIcon>
                                A propos
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonPage id="home-page">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start" color="primary">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonIcon
                            icon={bookmarkOutline}
                            size="large"
                            color="primary"
                        ></IonIcon>
                        <IonTitle>Writ'Pins</IonTitle>
                        <IonButtons slot="end">
                            <IonButton id="open-modal">
                                <IonIcon size="large" icon={addOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonRefresher slot="fixed" onIonRefresh={refresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>

                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Inbox</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonList>
                        {pins.map((p) => (
                            <PinListItem key={p.id} pin={p} />
                        ))}
                    </IonList>

                    <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.5} breakpoints={[0.25, 0.5, 0.75]}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Créer une épingle</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonInput
                                            label="Titre :"
                                            placeholder="Titre"
                                            value=""
                                            fill="solid"
                                            onIonInput={(e: any) => setFormSubject(e.target.value)}
                                        ></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            label="Citation"
                                            placeholder="Citation"
                                            value=""
                                            fill="solid"
                                            onIonInput={(e: any) => setFormContent(e.target.value)}
                                        ></IonInput>
                                    </IonItem>                                    
                                    <IonItem>
                                        {tags.map((tag, index) => (
                                            <IonChip key={index}>
                                                <IonLabel>
                                                    {tag}
                                                </IonLabel>
                                                <IonIcon icon={closeCircle} onClick={() => removeTags(index)}></IonIcon>
                                            </IonChip>
                                        ))}
                                        <IonInput
                                            label="Tags :"
                                            placeholder="Tags"
                                            value=""
                                            fill="solid"
                                            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                            onIonInput={(e: any) => setFormTags(e.target.value)}
                                        ></IonInput>
                                    </IonItem>
                                    <IonItem className="ion-justify-content-center">
                                            <IonButton onClick={() => addFormPin()}>Ajouter</IonButton>
                                    </IonItem>
                                    <IonItem className="item-button">
                                        <IonButton onClick={() => modal.current.dismiss()}>Annuler</IonButton>
                                    </IonItem>

                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonModal>


                </IonContent>
            </IonPage>
        </>
    );
};

export default Home;
