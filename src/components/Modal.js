import React from 'react'
import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const backdropVariants = {
    visible:{opacity:1},
    hidden:{opacity:0},
}

const modalVariants = {
    hidden:{y:"-110vh",opacity:0},
    visible:{y:"200px",opacity:1,transition:{delay:0.5}}
}
export default function Modal({showModal,setShowModal}) {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div 
                    className="backdrop"
                    variants={backdropVariants}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div
                        className="modal"
                        variants={modalVariants}
                        hidden="hidden"
                        visible="visible"
                    >
                        <p>
                            want to make pizza
                        </p>
                        <Link to="/">
                            <button>
                                Start again
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
