
export const encrypt = (text,key)=>{
let result = '';
text = text.toUpperCase();
key = key.toUpperCase();

for(let i=0,j=0; i<text.length;i++){
    const c= text.charCodeAt(i);
    if(c>=65 && c<=90){
        result+=String.fromCharCode((c - 65 + key.charCodeAt(j % key.length) - 65) % 26 + 65);
        j++;
        
    }else{
        result+=text.charCodeAt(i);
    }

}
return result;

}
export const decrypt = (text,key)=>{
    let result = '';
    text = text.toUpperCase();
    key = key.toUpperCase();
    
    for(let i=0,j=0; i<text.length;i++){
        const c= text.charCodeAt(i);
        if(c>=65 && c<=90){
            result+= String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
            j++;
            
        }else{
            result+=text.charAt(i);
        }
    
    }
    return result;
    
    }

