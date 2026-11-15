1.//Function scope
/* function abcd()
{
    if(true)
    {
        var x=10;
        let msg="greet"
        const name="sairam"
        console.log(x)
    }
        console.log(msg)//Not accesible out side the function scope
        console.log(name)//Not accesible out side the function scope
}
abcd() */

3. //Re-declaration

/* function abc()
{
    if(true)
   {
     var x=10;
     let age=30;
     const n=10;

     var x=20;
     let age=40;
     const n=20;

     console.log(x)
     console.log(age)
     console.log(n)

    }
}
abc() */

/* 2. //value assignment at declaration

function valassign()
{
    if(true)
    {
        var b;
        console.log(b)
        let age;
        console.log(age)
        const a;
        console.log(a)
    }
}
 valassign() */

 /* //4. Re-assignment
 
 function Reassign()
 {
    if(true)
    {
        var age=45;
        let name="satish"
        const pi=3.14

           age=56;
        name="smiley"
        const pi=3.15

        console.log(age)
        console.log(name)
        console.log(pi)
    }
 }
 Reassign() */

/*  //5. Hoisting
function varhost()
{
    if(true)
    {
        console.log(a);
        var a=10;
        console.log(b);
        let b=34;
        console.log(pi);
        const pi=3.14;
    }
}
varhost()
 */




