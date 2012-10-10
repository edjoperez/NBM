$("body").hide();
				$("#blueBar").css("background-color","#CC895D");
				$("body").css("background-color","#CFC2C2");
				$("#contentCol").css("background-color","#CFC2C2");
				$(".uiListItem").css("background-color","#DDD");
				$(".UFIRow").css("background-color","#DBC6BE");
$(function()
	{
			doc = document.location.toString();
			

			if(url("facebook"))
			{
			//Facebook
				//Timeline
				$("#pagelet_ego_pane_w").remove();
			
				//Apps
				$("#rightCol").remove();

			//General
				$("#blueBar").css("background-color","#CC895D");
				$("body").css("background-color","#CFC2C2");
				$("#contentCol").css("background-color","#CFC2C2");
				$(".uiListItem").css("background-color","#DDD");
				$(".UFIRow").css("background-color","#DBC6BE");
				$("body").fadeIn(1000);
			
			}
			
			if(url("cuantarazon") || url("ascodevida"))
			{
			//CuantaRazon
				//Index
				$("#banner1").html("");
				$("#banner1").height(0);
				$(".section div:first").remove();
					//Fixes
				 	$(".section .separator:first").remove();
				 	$(".section .separator:last").remove();
				$("#banner_footer").remove();
				$("#navigation iframe:last").remove();
			}
	});



//Utils

url = function(param)
{
	if(doc.indexOf(param) > -1)
			return true;
};


