var script = document.createElement('script');
script.src = '"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function union(x,y){
    if(typeof x === 'object' && typeof y === 'object'){
        var flag = false;
        $.each(x,function(){
            if(y.hasOwnProperty($(this))){
                flag = true;
            }
        });
        return flag?$.extend(y,x):$.extend(x,y); 
    }else if(Array.isArray(x) && Array.isArray(y)){
        return $.unique(x,y);
    }else{
        return undefined;
    }
}

function same(x,y){
    return JSON.stringify(x) === JSON.stringify(y);
}


function parseJsonString(x){
 
}
