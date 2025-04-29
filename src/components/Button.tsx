
import { cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const classes = cva('border h-12 rounded-full font-medium px-6',{
    variants: {
        variant:{
            primary:"text-neutral-950 bg-lime-400 border-lime-400",
            secondary:"border-white bg-transparent text-white"
        },
        size:{
            sm: "h-10"
        }
    }
})

function Button(props:{variant:"primary" | "secondary";size?:"sm"} & ButtonHTMLAttributes<HTMLButtonElement>) {
    const {variant,size,className, ...otherProps} = props

  return (
    <button
        className={classes({variant,size, className})}
        {...otherProps}
    />
  )
}

export default Button