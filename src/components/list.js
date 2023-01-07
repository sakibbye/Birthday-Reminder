import React from 'react'

export default function List({info, upcoming}) {
    return (
    <ul>
        {iterate(info, upcoming)}
    </ul>
  )
}

function iterate(data, upcoming){
    if(!data) return;

    const bgColor = upcoming ? {backgroundColor:'#ffe66d'} : {} ;
    return (
        <>
        {
            data.map((person, index) => {
                return(
                    <li key={index}>
                        <div className='flex' style={bgColor}>
                            <img src={person.img} width="100" height="100" alt='img' />
                            <div className='title'>
                                <h3 className='name' style={{margin : "10px 0"}}>{person.name}</h3>
                                <h5 className='birthDay' style={{margin : "4px 0"}}>{person.birthday}</h5>
                                <h5 className='age'>{Age(person.birthday)} years</h5>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </>
    )
}

//Age
function Age(personAge){
    let birthYear = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear- birthYear;
    
    return age;
}

