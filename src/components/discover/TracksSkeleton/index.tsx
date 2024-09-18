import styles from './styles.module.css';

const TracksSkeleton = () => {

    return (
        <ul className={ styles.skeletonList }>
            {
                Array.from({ length: 12 }).map((_, index) => (
                    <li key={index} className={ styles.skeleton }>
                        <div className={ styles.skeletonInfo }>
                            <div className={ styles.skeletonInfoTitle } />
                            <div className={ styles.skeletonInfoText1 } />
                            <div className={ styles.skeletonInfoText2 } />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TracksSkeleton;