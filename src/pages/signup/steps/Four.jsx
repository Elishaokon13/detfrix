import image from '../../../assets/image/88.png'
import React from 'react'

const styles = {
    proceedButton: "bg-[#800080] w-40 text-white p-2 hover:bg-opacity-60 rounded-xl"
}

const Four = () => {
    return (
        <div>
            <div className="p-8">
                <p className="text-center">
                    Hurrah!!! You have successfully signed up into your account 
                </p>
            </div>

            <div>
                <img alt='' src={image} />
            </div>

            <div className="pt-10 flex justify-center">
                <button className={styles.proceedButton}>
                    Proceed to Account
                </button>
            </div>
        </div>
    )
}

export default Four