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


