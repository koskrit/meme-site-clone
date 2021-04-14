import React from 'react'

function PostTest(props) {
    console.log(props)
    let div = document.createElement('div')
    div.innerHTML = props.data
    return (
        props.data
    )
}
export async function getServerSideProps () {
    let raw = await fetch("https://9gag.com/gag/a8E1obO")
    let data =await raw.text();

    return {
        props:{data}
    }

}

export default PostTest

