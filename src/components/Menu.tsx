import React from 'react';
import {
    IonMenu,
    IonContent,
    IonHeader,
    IonList,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonItem,
    IonMenuToggle,
} from "@ionic/react";
import { bookmarkOutline } from "ionicons/icons";
import "./Menu.css";

const Menu: React.FC = () => {

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
        </>
    );
};

export default Menu;