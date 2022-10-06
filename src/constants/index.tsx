import { TOKENS } from "types"
import {ReactComponent as IconMovEX} from "../assets/images/movex.svg"
import {ReactComponent as IconUSDC} from "../assets/images/usdc.svg"

export const Tokens : TOKENS = {
    "movex": {
        name: "MovEX",
        icon: <IconMovEX />
    },
    "usdc": {
        name: "USDC",
        icon: <IconUSDC />
    }
}