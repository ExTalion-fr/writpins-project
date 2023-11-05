import {
    IonChip,
    IonItem,
    IonLabel,
    IonAvatar,
    IonIcon,
    IonNote
} from '@ionic/react';

import { Pin } from '../data/pins';
import './PinListItem.css';
import { personCircleOutline } from 'ionicons/icons';

interface PinListItemProps {
    pin: Pin;
}

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
    return (
        <IonItem routerLink={`/pin/${pin.id}`} detail={false}>
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                <h2>
                    {pin.subject}
                    <span className="date">
                        {pin.tags.map(tag => {
                            return (
                                <IonChip key={tag.name}>
                                    <IonIcon size="large" icon={tag.logo} />
                                    <IonLabel>
                                        {tag.name}
                                    </IonLabel>
                                </IonChip>
                            )
                        })}
                        <IonNote>{pin.date.toLocaleDateString()}</IonNote>
                    </span>
                </h2>
                <h3>{pin.subject}</h3>
                <p>{pin.content}</p>
            </IonLabel>
        </IonItem>
    );
};

export default PinListItem;
