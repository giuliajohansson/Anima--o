import {motion} from 'framer-motion'

export default function Conteudo({visivel}){
    return(
        <motion.div
            initial={{opacity: 0, y:50}}//estado inicial da animação
            animate={{opacity: 1, y:0}}//estado final da animação
            exit={{opacity: 0, y: -50}}//estado de saída da animação
            transition={{duration: 1}}
            >
            {visivel && <h1>conteudo</h1>}
        </motion.div>
    )
}