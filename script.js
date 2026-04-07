

function isEven()
{    let num = document.getElementById("num").value;
     if (num === "") 
    {
        document.getElementById("result1").innerHTML = "Введите число!";
        return;
    }
    num = Number(num);
     if (num % 2 == 0) 
    {
        const message1 = "Число " + num + " - четное";
        console.log(message1);
        document.getElementById("result1").innerHTML = "Число " + num + " - четное!";
    } 
    else 
    {
	const message2 = "Число "+ num + " - нечетное";
        console.log(message2);
        document.getElementById("result1").innerHTML = "Число " + num + " - нечетное!";
    }	
}

function massiv()
{
     let arr = [];
     for(let i = 1; i <= 5; i++)
     {
        arr.push(i);
     }
      console.log("Массив чисел от 1 до 5: " + arr);
      let list = "<ul>";
      for(let i = 0; i < arr.length; i++ )
      {
          list = list + "<li>" + arr[i] + "</li>"
      }
      list += "</ul>";
      document.getElementById("result2").innerHTML = list;
}




