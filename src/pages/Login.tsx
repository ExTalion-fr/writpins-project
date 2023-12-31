import { IonBackButton, IonList, IonMenuToggle, IonItem, IonButton, IonTitle, IonMenu, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import './Login.css';

import { arrowBack, shapesOutline, bookmarkOutline } from "ionicons/icons";
import CustomField from '../components/CustomFiled';
import { useLoginFields } from '../data/fields';
import Action from '../components/Action';
import Wave from '../components/Wave';
import { useEffect, useState } from 'react';
import { validateForm } from '../data/utils';
import { useParams } from 'react-router';

const Login = () => {
    
    const params = useParams();

    const fields = useLoginFields();
    const [ errors, setErrors ] = useState(false);

    const login = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {

            //  Submit your form here
        }
    }

    useEffect(() => {

        return () => {

            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

	return (
        <>
            <IonMenu contentId="login-page">
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
            <IonPage id="login-page" className={ styles.loginPage }>
                <IonHeader>
                    <IonToolbar>
                        
                        <IonButtons slot="start">
                            <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                        </IonButtons>

                        <IonButtons slot="end">
                            <IonButton className="custom-button">
                                <IonIcon icon={ shapesOutline } />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonGrid className="ion-padding">
                        <IonRow>
                            <IonCol size="12" className={ styles.headingText }>
                                <IonCardTitle>Log in</IonCardTitle>
                                <h5>Welcome back, hope you're doing well</h5>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-margin-top ion-padding-top">
                            <IonCol size="12">

                                { fields.map(field => {

                                    return <CustomField key={field} field={ field } errors={ errors } />;
                                })}

                                <IonButton className="custom-button" expand="block" onClick={ login }>Login</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>

                <IonFooter>
                    <IonGrid className="ion-no-margin ion-no-padding">

                        <Action message="Don't have an account?" text="Sign up" link="/signup" />
                        <Wave />
                    </IonGrid>
                </IonFooter>
            </IonPage>
        </>
	);
};

export default Login;