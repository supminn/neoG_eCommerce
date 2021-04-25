import { useDataContext } from "../../../Context";
import { AddressCard } from "./addressCard";

export const ShowAddresses = () => {
    const {state:{addresses}} = useDataContext();
    return(
        <>
        {addresses.map((address) => (
            <AddressCard key={address.id} {...address} />
        ))}
        </>
    )
}