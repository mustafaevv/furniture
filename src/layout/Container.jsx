import classNames from "classnames";

import classes from './Container.module.scss'

const Container = ({className,children}) => {
  return(
    <div className={classNames(className,classes['container'])}>{children}</div>
  )
}
  

export default Container;
