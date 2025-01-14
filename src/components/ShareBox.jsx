import React from "react";

export default function ShareBox({isShare}){
    return (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-sm bottom-10 ">
            <div className="bg-white h-96 w-80 flex-col items-center justify-center">
                <p>Copy the link below</p>
                <input type="text"  className="bg-gray-700 text-white"/>
                <button onClick={isShare = false}>close</button>
            </div>
        </div>
    )
}