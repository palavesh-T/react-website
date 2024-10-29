import { Helmet } from "react-helmet-async";
export default function MetaTitle({title}){
    return(
        <Helmet>
            <title>{`${title}  Sea Sense Softwares Private limited`}</title>
        </Helmet>
    )
}