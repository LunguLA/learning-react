// import PropTypes from 'prop-types'
import className from 'classnames'
import { twMerge } from 'tailwind-merge';


const finalClassName = className({
    'bg-bluew-500': true,
    'py-1.5': true,
    'px-3': true
})

function Button({children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = twMerge(
        className(rest.className, 'px-3 py-1.5 border', {
          'border-blue-500 bg-blue-500 text-white': primary,
          'border-gray-900 bg-gray-900 text-white': secondary,
          'border-green-500 bg-green-500 text-white': success,
          'border-yellow-400 bg-yellow-400 text-white': warning,
          'border-red-500 bg-red-500 text-white': danger,
          'rounded-full': rounded,
          'bg-white': outline,
          'text-blue-500': outline && primary,
          'text-gray-900': outline && secondary,
          'text-green-500': outline && success,
          'text-yellow-400': outline && warning,
          'text-red-500': outline && danger
        })
      );
    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger, outline, rounded}) => {
        // console.log(props)
        const count = Number(!!primary)
            +Number(!!secondary)
            +Number(!!warning)
            +Number(!!danger)
            if(count >1) {
                return new Error('Multiple types of buttons sent as props, just one is required, fix it!!')
            }
            // +Number(!!outline)
            // +Number(!!rounded)
        // return new Error('Invalid Props')
    }
}

export default Button