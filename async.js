function walkdog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            
            if(dogWalked){
                resolve("Dog Walked");
            }else{
                reject("Dog Not Walked");
            }
        }, 1500);
    });
}