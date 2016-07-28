			function print(loc)
			{
				
				if(!(document.getElementById(loc).innerHTML=='X' || document.getElementById(loc).innerHTML=='0'))
				{
					char=document.getElementById("turn").value;
					if(char=='X')
					{
						document.getElementById(loc).style.color='red';
						document.getElementById("turn").value="0";
						document.getElementById("msg").innerHTML="PLAYER 2 TURN";	
					}
					if(char=='0')
					{
						document.getElementById(loc).style.color='#008800';
						document.getElementById("turn").value="X";
						document.getElementById("msg").innerHTML="PLAYER 1 TURN";
					}
					document.getElementById(loc).innerHTML=char;
					check();
				}
			}
			function hoverChange(loc)
			{
				if(!(document.getElementById(loc).innerHTML=='X' || document.getElementById(loc).innerHTML=='0'))
				{
					document.getElementById(loc).style.background='#FFFF86';
				}
			}
			function check()
			{
				
				// checking horizontally
				for(var i=1;i<9;i+=3)
				{
					if(document.getElementById("c"+i).innerHTML==document.getElementById("c"+(i+1)).innerHTML && document.getElementById("c"+(i+1)).innerHTML==document.getElementById("c"+(i+2)).innerHTML && document.getElementById("c"+i).innerHTML!="")
						winner();	
				}
				// Checking Vertically
				for(var i=1;i<4;i++)
				{
					if(document.getElementById("c"+i).innerHTML==document.getElementById("c"+(i+3)).innerHTML && document.getElementById("c"+(i+3)).innerHTML==document.getElementById("c"+(i+6)).innerHTML && document.getElementById("c"+i).innerHTML!="")
						winner();
							
				}
				// Checking diagonally
				i=1;
					if(document.getElementById("c1").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c9").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c1").innerHTML!="")
						winner();	
					
				i=3;
					if(document.getElementById("c3").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c5").innerHTML==document.getElementById("c7").innerHTML && document.getElementById("c3").innerHTML!="")
						winner();	
				// checking for draw
				var drawcheck=1;
					for(i=1;i<10;i++)
						if(!(document.getElementById("c"+i).innerHTML=="X"||document.getElementById("c"+i).innerHTML=="0"))
							drawcheck=0;
				
				if(drawcheck)
					winner(1);
			}
			
			/*function colorUp(i,j,k)
			{
				// defining color to display for winner
				var colour=document.getElementById("turn").value=="0"?'#456786':'white';
					
				document.getElementById(i).style.background=colour;
				document.getElementById(j).style.background=colour;
				document.getElementById(k).style.background=colour;
			}*/
			function winner(draworwin)
			{
				var turn=document.getElementById("turn").value;
				var name=document.getElementById("turn").value=="0"?"Player 1":"Player 2";
				/*if(document.getElementById("turn").value=="0")
					name="Player 1";
				else
					name="Player 2";*/
				if(!draworwin)
				{
					document.getElementById("msg").innerHTML=name+" Won";
					alert(name+" Won");
				}
				else
				{
					document.getElementById("msg").innerHTML="GAME DRAW";
					alert("GAME DRAW");
				}
				var v=confirm("Do you want to Play again ?");
				if(v==1)
				{
					//window.location.reload(true);
					name=document.getElementById("turn").value=="X"?"Player 1":"Player 2";
					document.getElementById("msg").innerHTML=name+" turn";
					for(var i=1;i<10;i++)
					{
						document.getElementById("c"+i).innerHTML="";
						document.getElementById("c"+i).style.background="#FCF9B6";
					}
				}
				else
					window.close();
					

			}