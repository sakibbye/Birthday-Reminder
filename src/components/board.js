import React from 'react';
import './board.css';
import List from './list';

const Info = [
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/317739498_3354396804839928_8716139675904112063_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHMMy3-Oz6-_0AzcxDf9sVVtzDW1UkY7rO3MNbVSRjusygv71tOGHCkESjHcr_kxPvuRZgy-Ch7lxCbdUxpnU8q&_nc_ohc=zWHyDmAOCLYAX_h-_ku&tn=QXhlVyVgM12fPisy&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfDhPIwqq95F5TZEyghcbQ4ZCjYlzxIgqA5q3xvhX7h45A&oe=63BE7C28",
        name : "Akramul Quadir Alif", birthday : "1997-05-08"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/322065420_672638751266308_509112591336500289_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHUMPvVh7dEXomwz6eYmK-JpZMNwQcMcYOlkw3BBwxxg7TOEODJfvcfKhUNoZOzNZblrddvlp3KftCn21IfM8uy&_nc_ohc=dfufYusp2OsAX8JD2iM&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBBMQMWEBCAZGQKNKfnjJcd4Db9b146IzQqurWRIgooJQ&oe=63BF23CA",
        name : "Arindom Ray", birthday : "1998-04-05"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/321606688_691227669055553_1890359227076139140_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZDHiugPwHmCH1Nij-WdMT4X3xl3t7IoDhffGXe3sigE0HRQfaAQysK-X-W4DIdOFVSKWyPzgXd_L6H_lGjmIQ&_nc_ohc=tfB_VGpOgkkAX99CClx&tn=QXhlVyVgM12fPisy&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBIbF6IXXIVn6x0_c7uEA1J0cnusl1PhWkFgRG9y4hEIw&oe=63BE7416",
        name : "Avijit Ghosh", birthday : "1998-02-01"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t1.6435-9/84409593_186210669416304_3224339744196395008_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaUYIY_6vOsTEK8-cxj1ErfBPXPx5Ma658E9c_HkxrrkI1G3B3NAYpb66vpEY4dGk60fUhZ55q5KOKMWArIgiR&_nc_ohc=BkhVf8tj8fAAX83EgCs&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAneQ4abaftGTSiAgvbu3b9jhM6CsT60eNDAnQ13yf5jQ&oe=63E14143",
        name : "Ishtiaque Raj", birthday : "1997-01-10"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/271222976_2988213281429349_7497644452539773258_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHz9EO8RzrcKwh3qS838S8HMsSWTDAZK_cyxJZMMBkr93A_TBITpvTW4xNe6LiSkiZ_04oXvutQlV1iQUPKJ7bR&_nc_ohc=j0WkktoDPkYAX_URrEc&tn=QXhlVyVgM12fPisy&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCeY-FrpVFSbb-yU4h_rhb1yhlN-283Wgka96bUJ8PbwA&oe=63BECC48",
        name : "Kazi Tanvir Haque", birthday : "1997-11-20"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t1.6435-9/46495989_1867165713402055_2205641220334551040_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGDCLWNupQAHajv2avKL8uzasTt4Kr1JTNqxO3gqvUlDuyPo_FmULUs428OB3Msv8JhBsIid6iQWTS0nNcIs_k&_nc_ohc=3NLlIbWueswAX8NaRje&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfDINCEhhZSqXvi0MWZmmAaLEBLbMgv_vp3_daMMFYivPg&oe=63E122C9",
        name : "Tanvir Ahad Joy", birthday : "1997-07-11"
    },
    {
        img : "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315309394_3447674868785200_3710070523793038652_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFUsQAFBcbLHBSSY-bRixSFfuxcx07hzYd-7FzHTuHNh7C5X3fcyMebLhpnpRspSQ-9FPGYbfRW3vePKh5U6O2u&_nc_ohc=wF0biEn5bdIAX9bDboT&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAGXR9_gIKJAZXCoBDLi_gG_Jk-rbvycxI6SSQifkAe9g&oe=63BF078E",
        name : "Kushal Dutta", birthday : "1997-06-11"
    }
  ]

export default function board() {
  return (
    <main id='site-main'>
        <h1 className='text-dark title'>
            Birthday Reminder
        </h1>

        <div className='board'>
            <List info={Today(Info)} upcoming={false}/>
            <h2 className='upcoming text-dark'>Upcoming</h2>
            <List info={Upcoming(Info, 2)} upcoming={true}/>
        </div>
    </main>

    )
}

//Today filter
function Today(person){
    let curretDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentMonth === month && curretDay === day;
    })

    return filter;
}

//Upcoming Birthdays
function Upcoming(person, toMonth){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    console.log(currentDay, currentMonth);
    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();
    
        if(currentMonth === month && currentDay >= day) return;
        return month >= currentMonth && month <= currentMonth + toMonth;
    }) 

    return filter;
}
