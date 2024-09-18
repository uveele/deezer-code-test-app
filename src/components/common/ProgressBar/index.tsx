import classes from './styles.module.css';

// interface ProgressBarCSSProps extends React.CSSProperties {
//     '--thumb-position-left': number;
//   }

const ProgressBar = (props: React.ComponentPropsWithoutRef<"input">) => {

    const { max, value, step = 1, ...rest } = props;
    
    const numValue = Number(value);
    const numStep = Number(step);
    
    const progressMod = numValue % numStep;
    const exactValue = progressMod < (numStep / 2) ? numValue - progressMod : Math.floor(numValue) + numStep;
    const progressPercent = (exactValue * 100 / Number(max));

    return (
        <input 
            className={ classes.progressBar }
            type="range"
            min={ 0 }
            max={ max }
            value={ exactValue }
            step={ step }
            style={{
                background: `linear-gradient(to right, #EF5466 ${progressPercent}%, #0000000D ${progressPercent}%)`
            }}
            {...rest} 
        />
    )

}

export default ProgressBar