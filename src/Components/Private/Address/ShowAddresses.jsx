import { useDataContext } from "../../../Context";
import { AddressCard } from "./AddressCard";

export const ShowAddresses = () => {
    const {state:{addresses}} = useDataContext();
    return(
        <>
        {addresses.map((address) => (
            <AddressCard key={address._id} {...address} />
        ))}
        </>
    )
}