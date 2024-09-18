import classes from './styles.module.css';
import { ReactElement } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
}

const Input = (props: InputProps) => {

  const { icon, ...rest } = props;

  return (
    <div className={classes.wrapper}>
        { icon }
        <input type="text" {...rest} />
    </div>
  )
}

export default Input;