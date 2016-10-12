/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
prompt("1 para bomba de agua");
prompt("2 para bomba de gasolina");
prompt("3 para bomba de hormigon");
prompt("4 para bomba de pasta alimenticia");

eligebomba=parseInt( window.prompt("intrduce la bomba a utilizar :"));
comprobacion=true;

if(comprobacion===true){
switch (eligebomba){
    case 1:
        prompt("bomba de agua");
       
        break;
    case 2:
        prompt("bomba de gasolina");
       
        break;
    case 3:
        prompt("bomba de hormigon");
        
        break;
    case 4:
        prompt("bomba de pasta alimenticia");
        
        break;
        
    default:
        comprobacion=false;
     
        } }
    else {
     switch (eligebomba){   
         case 1:
        prompt("bomba de agua");
       
        break;
    case 2:
        prompt("bomba de gasolina");
       
        break;
    case 3:
        prompt("bomba de hormigon");
        
        break;
    case 4:
        prompt("bomba de pasta alimenticia");
        
        break;
        
    default:
        comprobacion=true; 
        
    }    
    }

        
