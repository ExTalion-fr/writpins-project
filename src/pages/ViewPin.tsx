import { useState } from "react";
import { Pin, getPin } from "../data/pins";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    IonChip,
    useIonViewWillEnter,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useParams } from "react-router";
import "./ViewPin.css";

function ViewPin() {
    const [pin, setPin] = useState<Pin>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(() => {
        const pn = getPin(parseInt(params.id, 10));
        setPin(pn);
    });

    return (
        <IonPage id="view-pin-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            text="Accueil"
                            defaultHref="/home"
                        ></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {pin ? (
                    <>
                        <IonItem>
                            <IonIcon
                                aria-hidden="true"
                                icon={personCircle}
                                color="primary"
                            ></IonIcon>
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                    {pin.fromName}
                                    <span className="date">
                                        <IonNote>{pin.date.toLocaleDateString()}</IonNote>
                                    </span>
                                </h2>
                                <h3>
                                    To: <IonNote>Me</IonNote>
                                </h3>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-padding">
                            <h1>{pin.subject}</h1>
                            <div className="pin-container">
                                {pin.tags.map((tag) => {
                                    console.log(tag);
                                    return (
                                        <IonChip key={tag.name}>
                                            <IonIcon size="large" icon={tag.logo} />
                                            <IonLabel>{tag.name}</IonLabel>
                                        </IonChip>
                                    );
                                })}
                            </div>
                            <p>
                                {pin.content}
                            </p>
                        </div>
                    </>
                ) : (
                    <div>Pin not found</div>
                )}
            </IonContent>
        </IonPage>
    );
}

export default ViewPin;
