import { type integrationType } from "@/sections/Integrations"
import Image from "next/image"
import { twMerge } from "tailwind-merge";

const IntegrationColumn = (props:{integrations : integrationType;className?:string}) => {
    const {integrations,className} = props
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4",className)}>
            {integrations.map(integration =>(
                <div key={integration.name} className="bg-neutral-900 border-white/10 rounded-3xl p-6">
                    <div className="flex justify-center items-center">
                        <Image
                            src={integration.icon}
                            alt={integration.name}
                            className="size-24"
                        />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                    <p className="text-center text-white/50">{integration.description}</p>
                </div>
            ))}
        </div>
  )
}

export default IntegrationColumn