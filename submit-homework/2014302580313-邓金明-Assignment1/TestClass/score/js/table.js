function pageX(elem) {
    return elem.offsetParent ? elem.offsetLeft + pageX(elem.offsetParent) : elem.offsetLeft;
    }

function pageY(elem) {
    return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
}
function showDownOrHideUp(selector){
	var height;
	var myInterval; 
	var delta = 3;
	var maxH = 97;
	if ( $.browser.msie ){
		delta = 10;
		maxH = 90;
	}
	var menuCon = $(selector);
	var display = menuCon.css("display");
	if(display=="none"){
		menuCon.height(0);
		menuCon.show();
		height = 0;
		myInterval = setInterval(function(){
				if(height>=maxH)
					clearInterval(myInterval);
				menuCon.height(height+=delta);
			}
			,5);
	}else{
		height = menuCon.height();
		myInterval = setInterval(function(){
				if(height<=0){
					clearInterval(myInterval);
					menuCon.hide();
				}
				menuCon.height(height-=delta);
			}
			,5);
	}
}

$(document).ready(
	function(){ 
	    //alert("table.js");
		$(".listTable tr").mouseover(function(){$(this).addClass("over");})
		$(".listTable tr").mouseout(function(){$(this).removeClass("over");}) 
		$(".listTable tr:even").addClass("alt");
	}

);

var time_bucket_start = new Array("08:00","08:50","09:50","10:40","11:30","14:05","14:55","15:45","16:40","17:30","18:30","19:20","20:10");//ÿ�ڿε���ʼʱ��
var time_bucket_end = 	new Array("08:45","09:35","10:35","11:25","12:15","14:50","15:40","16:30","17:25","18:15","19:15","20:05","20:55");//ÿ�ڿεĽ���ʱ��

function startExpose(){
		/*$("#prompt").expose({
			color:'#789',
			closeOnEsc: true, 
			closeOnClick: false,
			zIndex:1
		});	*/
		parent.parent.document.body.parentNode.style.overflow="auto";
		mybg =document.createElement("div"); 
		mybg.setAttribute("id","mybg");  
		mybg.style.background = "#000";  
		var s_height=document.body.scrollHeight; 
		var s_width=document.body.scrollWidth; 
		if(s_height<window.screen.availHeight) 
		{ 
			s_height=window.screen.availHeight; 
		} 
		//console.info("document.body.scrollHeight:"+document.body.scrollHeight);
		//console.info("window.screen.availHeight��"+window.screen.availHeight);
		mybg.style.width = s_width+"px";  
		mybg.style.height = s_height+"px";  
		mybg.style.position = "fixed";  
		mybg.style.top = "0";  
		mybg.style.left = "0";  
		mybg.style.zIndex = "0";  
		mybg.style.opacity = "0.3";  
		mybg.style.filter = "Alpha(opacity=30)";  
		$(mybg).insertBefore($("#prompt",document)) 
		
	}
function closeExpose(){
	//$.mask.close();
	parent.parent.document.body.parentNode.style.overflow="scroll"; 
	$(mybg).remove();
}
function cancleExpose(){
	//$.mask.close();
	//parent.parent.document.body.parentNode.style.overflow="scroll"; 
	$(mybg).remove();
}    
   
/***************************************************
*����˵��:��̬����iframe�ĸ߶�
*selector:�������߶ȵ�iframeѡ����
*ʹ��ʱ�ڱ�����ҳ���body��onload��������
***************************************************/
function IFrameResize(selector){
	var height = this.document.body.scrollHeight;
	//console.info("��ǰҳ��߶ȣ�"+height);
	var obj = $(selector,window.parent.document);  //ȡ�ø�ҳ��IFrame����
	//console.info("IFrame�����õĸ߶�:"+obj.height());
	obj.height(height);  //������ҳ����IFrame�ĸ߶�Ϊ��ҳ��ĸ߶�
}

/***************************************************
*����˵��:��̬����iframe�ĸ߶ȣ����������б����ص�ҳ���ж����
*ʹ��ʱֻҪ��iframe���ڵ�ҳ����ӣ���ע���޸�iframe��ѡ������
<script type="text/javascript">
	$(function(){
		$("#overLayFrame").load(IFrameResize2);
	});
</script>
***************************************************/
function IFrameResize2(){	
	//console.info("IFrame�߶ȣ�"+$(this).height());
	//console.info("��ҳ��߶ȣ�"+$(this).contents().find("body").height());
	//$(this).height($(this).contents().find("body").height()+30);
	
	//console.info("IFrame�߶ȣ�"+$(this).height());
	//console.info("��ҳ��߶ȣ�"+$(this).contents().find("body")[0].scrollHeight);
	
	//modified by huangtingting @2015-1-14 
	//Ϊ��ʹ�õ�����ĸ߶�������Ӧ�������޸�
	/*var t_height = $(this).contents().find("body")[0].scrollHeight+30;
	if($(this).contents().find("#preViewContent")[0]!=undefined)
		t_height=623+30;
	if(window.parent.frames['overLayFrame'].location.pathname=="/common/tip.jsp")
		t_height=200;
	$(this).height(t_height);*/
	$(this).css({"height":"auto"});
	$(this).css({"min-height":"700px"});
}
/***************************************************
*����˵��:��̬������ʾ�б��iframe�ĸ߶ȣ�
*���������б����ص�ҳ���ж����
*ʹ��ʱֻҪ��iframe���ڵ�ҳ����ӣ���ע���޸�iframe��ѡ������
<script type="text/javascript">
	$(function(){
		$(".panel iframe").load(IFrameResizeForList);
	});
</script>
***************************************************/
function IFrameResizeForList(){		
	
	var iframeHeight = $(this).height();
	var childPageHeight = $(this).contents().find("body")[0].clientHeight;
	
	//console.info("IFrame�߶ȣ�"+iframeHeight);
	//console.info("��ҳ��߶ȣ�"+childPageHeight);
	
	var mainContainer = $("#main_contaier",window.parent.document);
	var mainContainerHeight = mainContainer.height();
	var panel = $(".panel");
	var panelHeight = panel.height();
	
	//console.info("#main_contaier�ĸ߶�:"+panelHeight);
	//console.info(".panel�ĸ߶�:"+panelHeight);
	
	//content.height($(this).contents().find("body")[0].scrollHeight+30);
	if(childPageHeight+100>800)
		mainContainer.height(childPageHeight+230);
	else
		mainContainer.height(820);
	if(childPageHeight>600)
		panel.height(childPageHeight);
	else
		panel.height(600);
		
	//console.info("֮��#main_contaier�ĸ߶�:"+mainContainer.height());
	//console.info("֮��.panel�ĸ߶�:"+panel.height());
}

var tablehtml;

/**
id:table��id����class
beginrow:�ӵڼ��п�ʼ�ϲ�
begincol:�ӵڼ��п�ʼ�ϲ�
rows:��Ҫ�ϲ�������
cols:��Ҫ�ϲ�������
des:�ϲ�֮�󣬲���������ͬ��λ�úϲ�������ʧЧ
content:�ϲ���Ԫ�������
timeId:��Ӧ�γ�չ������ϸ��Ϣ��table
*/
function mergecell(id,beginrow,begincol,rows,cols,content,timeId){
	//alert("invoke mergecell");
	var $table;
	if($("#"+id).length!=0)
	$table= $("#"+id);
	else if($("table[class='"+id+"']").length!=0)
		$table = $("table[class='"+id+"']");
		
	else return false;
		
		var $beginTD = $('tr:eq('+(beginrow-1)+') td:nth-child('+begincol+')',$table);
		if(cols>=2)
		{
			var i = cols;
			
			$beginTD.attr("colSpan",cols);
			$next;
			while(i>1)
			{
				
				$beginTD.next().hide();
				i--;
			}
		}
		
		if(rows>=2)
		{
			var i = rows;
			
			$beginTD.attr("rowSpan",rows);
			var _beginrow = beginrow+1;
			//console.info("ɾ������ʼ��="+_beginrow);
			while(i>1)
			{
				var j = cols;
				var $tmpTD = $('tr:eq('+(_beginrow-1)+') td:nth-child('+begincol+')',$table);
				while(j>0)
				{
					$tmpTD.next().hide();
					j--;
				}
				_beginrow++;
				i--;
			}
		}
		$('tr:eq('+(beginrow-1)+') td:nth-child('+begincol+')',$table).attr("id",timeId).html(content).css("text-align","center").css("font-size","13px").css("background-color","#f6e08c").mouseover(function(event){
		//alert("mouseover");
		//var top = $(this).offset().top;
		//var left = $(this).offset().left;
		
		var offset = $(window.parent.document.getElementById('left_bar')).offset();
		var x = event.pageX + offset.left;
		var y = event.pageY + offset.top;
		var $detail = $(window.parent.document.getElementById(''+this.id));
		$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
		//console.info(this.id);
		
		$detail.show();
		}).mouseout(function(){
		var $detail = $(window.parent.document.getElementById(''+this.id));
		//console.info(this.id);
		$detail.hide();
		});//�ȵ���click()�������html()��������IE���������У�ԭ�����
		
		
		
}
/***************************************************
*����˵��:����γ̵����½ǵİ�ť��չ���γ̵���ϸ��Ϣ
*object:��ǰ�Ķ���,this
***************************************************/
function course_zk(object)
{
	/*var $this = $(object);
	var id = $this.attr("rel");
	alert(id);
	console.info($("table[id="+id+"]").html());
	var rowspan = $this.attr("rowSpan");
	rowspan--;
	var $insert = $this.parent();
	while(rowspan > 0)
	{
	$insert = $insert.next();
	rowspan--;
	}
	$insert.after("<tr><td colspan=10></td></tr>");
	$insert.next().children("td").append($("table[id="+id+"]").html());*/
}
/*************************************************
*����˵��:���ݵ�ǰʱ�������id
*
**************************************************/
function getTimeId()
{
 var date = new Date();
 return date.getTime();
}

/**
* ���ܣ��ж����������
* ���ߣ�����
* ���ڣ�20140701
*/
//��������������͵Ķ������
var Sys = {};
function checkBrowserType(){
	var browser = navigator.userAgent.toLowerCase();
	//console.log(browser);
	Sys.ie = /msie/.test( browser ) || /trident/.test( browser );
	Sys.firefox = /firefox/.test( browser );
	Sys.chrome = /chrome/.test( browser );
//	alert(browser);
}
/*
* id_class:table��id����class
* beginrow:�ӵڼ��п�ʼ�ϲ�
* begincol:�ӵڼ��п�ʼ�ϲ�
* rows:��Ҫ�ϲ�������
* cols:��Ҫ�ϲ�������
* des:�ϲ�֮�󣬲���������ͬ��λ�úϲ�������ʧЧ
* content:�ϲ���Ԫ�������
* timeId:��Ӧ�γ�չ������ϸ��Ϣ��table
state:��Ӧ�γ̵�״̬
sessionNum:��ǰ��¼���˺�
userType����ǰ��½������
*
*/
function addCoursediv(id_class,beginrow,begincol,rows,cols,content,timeId,state)
{
	//ע�͵�ÿ�ε��ô˷��������������͵ķ�����comented by wangpan @20140701��
	//�ж������	
   //  var Sys = {};
   //     var ua = navigator.userAgent.toLowerCase();
   //     var s;
   //     (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
   //     (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
   //     (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
   //      0;
   var images;
   var sessionNum = $('#new-course-table').attr('sessionNum');
   var userType =  $('#new-course-table').attr('userType');
   if(userType == 1){//ѧ����¼
       if(parseInt(sessionNum.substring(0,4))>2010){
	   		if(parseInt(state) == 0){
				images = 'url(../courseStateImg/notAccout.png)';//δ����
			}else if(parseInt(state) == 12  || parseInt(state) == 5){
				images = 'url(../courseStateImg/toPay.png)';//���ɷ�
			}else if(parseInt(state) == 11){
				images = 'url(../courseStateImg/toConfirme.png)';//��ȷ��
			}else if(parseInt(state) == 9 || parseInt(state) == 13 || parseInt(state) == 15 || parseInt(state) == 17 ){
				images = 'url(../courseStateImg/confirmed.png)';//��ȷ��
			}
   	  }else{
   		 images = 'url(../images/course_red_flag.png)';
   	  }
   }else if(userType == 2){//��ʦ��¼
   		images = 'url(../images/course_red_flag.png)';
   }
	
	var $table;
	if($("#"+id_class).length!=0)
	$table= $("#"+id_class);
	else if($("table[class='"+id_class+"']").length!=0)
		$table = $("table[class='"+id_class+"']");
	else return false;
	
	var $beginTD = $('tr:eq('+(beginrow-1)+') td:nth-child('+(begincol+1)+')',$table);
	
	 if (Sys.ie){
			var x = $beginTD.offset().left+1;
			var y = $beginTD.offset().top;
			var cellWidth = $beginTD.width();
			var cellHeight = $beginTD.height()+2;
	}
	  if (Sys.firefox){
			var x = $beginTD.offset().left;
			var y = $beginTD.offset().top;
			var cellWidth = $beginTD.width()-1;
			var cellHeight = $beginTD.height()+1;
	  }
	   if (Sys.chrome){
			var x = $beginTD.offset().left+1;
			var y = $beginTD.offset().top+1;
			var cellWidth = $beginTD.width();
			var cellHeight = $beginTD.height()+2;
	   }
	
	var index = (beginrow - 1) + "_" + begincol + "_" + rows + "_" + cols;
	//console.info(index);
	if(array[ index ] == undefined)//���������
	{
	   // console.info("yes");
	   
	    var flag = isContained((beginrow - 1),begincol,rows,cols);
	    if(flag == -1 ) //û�и��ǵ����
		{
			array[ index ] = timeId; 
			//console.info("û�и���");
			var currentWeek = new Date().getDay();
			if(currentWeek==begincol-1){  //TODO ���ݿγ�״̬�����Ӧ��ͼ��
				var html = "<div id='" + timeId + "' style='text-align:center;font-size:13px;position:absolute;left:" + x + "px;top:" + y + "px;background-color:#f3f3f3;background-image:"+images+";background-repeat:no-repeat;background-position:right bottom';>" + "<div id= 'a"+ timeId +"' style='color:#444444;position:relative'>" + content + "</div>" + "</div>";
			} else {
				var html = "<div id='" + timeId + "' style='text-align:center;font-size:13px;position:absolute;left:" + x + "px;top:" + y + "px;background-color:#FFF;background-image:"+images+";background-repeat:no-repeat;background-position:right bottom';>" + "<div id='a"+ timeId +"' style='color:#444444;position:relative'>" + content + "</div>" +  "</div>";
			}
			
			$("body").append(html);
			$("#"+timeId).width(cellWidth * cols + "px").height((cellHeight * rows-1) + "px").mouseover(function(event){
					//alert("mouseover");
					/*
					var offset = $(window.parent.document.getElementById('left_bar')).offset();
					var x = event.pageX + offset.left;
					var y = event.pageY + offset.top;
					var $detail = $(window.parent.document.getElementById(''+timeId));
					$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
					$detail.show();
					*/
					$("#"+timeId).css("background-color","#888888").css("font-color","#FFFFFF");
					$("#a"+timeId).css("color","#FFFFFF");
					
					
					var yPos=0;
					var courseTableHeadHeight = $("#courseTableHead").height();//��ͷ�߶�
					//var $detail = $(window.parent.document.getElementById(''+timeId));
			     	//���½��в���
			        if (Sys.ie){ 
			        		//show2(beginrow>=13?(beginrow-1)*cellHeight+31:(beginrow+rows)*cellHeight+32,timeId,cellWidth*7-14);
			        		//console.info("AAAAAA"+cellHeight);
			        		yPos = (beginrow + rows - 1) * cellHeight + courseTableHeadHeight-1;
			        		if(beginrow>=13)
			     				yPos= (beginrow-1)*cellHeight + courseTableHeadHeight-153;
			        		show2(yPos,timeId,cellWidth*7-14);
			        }
			     	if (Sys.firefox){
			     			//show2(beginrow>=13?(beginrow-1)*cellHeight+50-126:(beginrow+rows)*cellHeight+31,timeId,cellWidth*7-14);
			     			yPos = (beginrow + rows - 1) * cellHeight + courseTableHeadHeight;
			     			if(beginrow>=13)
			     				yPos= (beginrow-1)*cellHeight + courseTableHeadHeight-19-126;
			     			show2(yPos,timeId,cellWidth*7-14);
			     	}
			       	if (Sys.chrome){
			       			show2(beginrow>=13?(beginrow-1)*cellHeight+50-126:(beginrow+rows)*cellHeight+32,timeId,cellWidth*7-15);
			       	}
							
					//show2((beginrow+rows)*cellHeight+33,timeId,cellWidth*7-15);
					
			}).mouseout(function(){//�ȵ���click()�������html()��������IE���������У�ԭ�����;
			//alert("mouseout");
				if(currentWeek==(begincol-1))
			{
				$("#"+timeId).css("background-color","#f3f3f3");
			}else
			$("#"+timeId).css("background-color","#FFFFFF");
		
			 $("#a"+timeId).css("color","#444444");
			var $detail = $(window.parent.document.getElementById(''+timeId));
			//console.info(this.id);
			$detail.hide();
			});
			
			var $childDiv = $("#"+timeId).find("div");
			$childDiv.css("top",$("#"+timeId).height()/2 - $childDiv.height()/2).css("left",$("#"+timeId).width()/2 - $childDiv.width()/2);//�ÿγ����ݾ�����ʾ
		}
		else {//����ӵĿγ̵�div�飬���Ѿ����ڵĿγ̵�div����ڲ����ⲿ
			    //console.info('���ڸ���');
				var p = flag.substring(2);
				var exited_id = array[p];//�����ſγ̵���ϸ��Ϣ�ϲ���ʾ
				var $course_1 = $(window.parent.document.getElementById(''+exited_id));
				var $course_2 = $(window.parent.document.getElementById(''+timeId));
				var html = $course_1.html() + "<p style='border:1px solid #fff'></p>" + $course_2.html();
				$course_2.remove();
				$course_1.html(html);
				$("#"+exited_id).find("div").append("<br/>"+content+"("+ (beginrow - 1) + "-" +( beginrow - 2 + rows)+ "��)").mouseover(function(event){
				//alert("mouseover");
				
				/*
				var offset = $(window.parent.document.getElementById('left_bar')).offset();
				var x = event.pageX + offset.left;
				var y = event.pageY + offset.top;
				var $detail = $(window.parent.document.getElementById(''+exited_id));
				$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
				//console.info(this.id);
				$detail.show();
				*/
				$("#"+timeId).css("background-color","#888888").css("font-color","#FFFFFF");
			$("#a"+timeId).css("color","#FFFFFF");
			show2((beginrow+rows)*cellHeight+33+beginrow+rows,timeId,cellWidth*7-15);
				
				}).mouseout(function(){//�ȵ���click()�������html()��������IE���������У�ԭ�����;
				//alert("mouseout");
					if(currentWeek==(begincol-1))
			{
				$("#"+timeId).css("background-color","#f3f3f3");
			}else
			$("#"+timeId).css("background-color","#FFFFFF");
			    $("#a"+timeId).css("color","#444444");
				var $detail = $(window.parent.document.getElementById(''+exited_id));
				//console.info(this.id);
				$detail.hide();
				});
				var $childDiv = $("#"+exited_id).find("div");
				$childDiv.css("top",$("#"+exited_id).height()/2 - $childDiv.height()/2).css("left",$("#"+exited_id).width()/2 - $childDiv.width()/2);//�ÿγ����ݾ�����ʾ;
			 }
	}
	else { //����Ѿ����ڣ���ô����ͬ��λ�ã����һ�ſγ�
		
		var exited_id = array[index];
		//�����ſγ̵���ϸ��Ϣ�ϲ���ʾ
		var $course_1 = $(window.parent.document.getElementById(''+exited_id));
		var $course_2 = $(window.parent.document.getElementById(''+timeId));
		var html = $course_1.html() + "<p style='border:1px solid #fff'></p>" + $course_2.html();
		$course_2.remove();
		$course_1.html(html);
		$("#"+exited_id).find("div").append("<br/>"+content).mouseover(function(event){
		//alert("mouseover");
		
		/*
		var offset = $(window.parent.document.getElementById('left_bar')).offset();
		var x = event.pageX + offset.left;
		var y = event.pageY + offset.top;
		var $detail = $(window.parent.document.getElementById(''+exited_id));
		$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
		//console.info(this.id);
		$detail.show();
		*/
		show(begincol,event,exited_id);
		}).mouseout(function(){//�ȵ���click()�������html()��������IE���������У�ԭ�����;
		//alert("mouseout");
		var $detail = $(window.parent.document.getElementById(''+exited_id));
		//console.info(this.id);
		$detail.hide();
		});
		var $childDiv = $("#"+exited_id).find("div");
		$childDiv.css("top",$("#"+exited_id).height()/2 - $childDiv.height()/2).css("left",$("#"+exited_id).width()/2 - $childDiv.width()/2).css("color","red");//�ÿγ����ݾ�����ʾ;
		
	}
	
}
/***********ȫ�ֱ���****************/
var array = new Array();
$(function(){
/*
var detailCourse = "<div id=\"" + 123 + "\" style=\"position:absolute;background-color:#696969;padding:10px;display:none;\"><table style=\"font-size:13px;color:#fff\"cellspacing='10'><tr><td>"; 
			detailCourse += "�ߵ���ѧ" + "[רҵ���޿γ�]" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ο���ʦ��"  + "</td>" + "<td>" + "ѧ�֣�" + "2.0" + "</td>" + "<td>" + "�Ͽ�ʱ�䣺" +"���ڶ���1-8�ܣ�ÿһ�ܣ�3-5��" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ڿ�ѧԺ��" + "�����ѧԺ" + "</td>" + "<td>" + "�꼶��" + "2010��" + "</td>" + "<td>" + "���ң�" + "3����1-200" + "</td></tr>";
			detailCourse += "<tr><td>" + "רҵ��"  + "</td>" + "<td>" + "�༶��" + "�ƿ�1-3��" + "</td></tr>";
			detailCourse += "</table></div>";
$(window.parent.document.body).append(detailCourse);
var detailCourse = "<div id=\"" + 456 + "\" style=\"position:absolute;background-color:#696969;padding:10px;display:none;\"><table style=\"font-size:13px;color:#fff\"cellspacing='10'><tr><td>"; 
			detailCourse += "�ִ���ѧ" + "[רҵ���޿γ�]" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ο���ʦ��"  + "</td>" + "<td>" + "ѧ�֣�" + "2.0" + "</td>" + "<td>" + "�Ͽ�ʱ�䣺" +"���ڶ���1-8�ܣ�ÿһ�ܣ�3-5��" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ڿ�ѧԺ��" + "�����ѧԺ" + "</td>" + "<td>" + "�꼶��" + "2010��" + "</td>" + "<td>" + "���ң�" + "3����1-200" + "</td></tr>";
			detailCourse += "<tr><td>" + "רҵ��"  + "</td>" + "<td>" + "�༶��" + "�ƿ�1-3��" + "</td></tr>";
			detailCourse += "</table></div>";
$(window.parent.document.body).append(detailCourse);
var detailCourse = "<div id=\"" + 789 + "\" style=\"position:absolute;background-color:#696969;padding:10px;display:none;\"><table style=\"font-size:13px;color:#fff\"cellspacing='10'><tr><td>"; 
			detailCourse += "���Դ���" + "[רҵ���޿γ�]" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ο���ʦ��"  + "</td>" + "<td>" + "ѧ�֣�" + "2.0" + "</td>" + "<td>" + "�Ͽ�ʱ�䣺" +"���ڶ���1-8�ܣ�ÿһ�ܣ�3-5��" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ڿ�ѧԺ��" + "�����ѧԺ" + "</td>" + "<td>" + "�꼶��" + "2010��" + "</td>" + "<td>" + "���ң�" + "3����1-200" + "</td></tr>";
			detailCourse += "<tr><td>" + "רҵ��"  + "</td>" + "<td>" + "�༶��" + "�ƿ�1-3��" + "</td></tr>";
			detailCourse += "</table></div>";
$(window.parent.document.body).append(detailCourse);
var detailCourse = "<div id=\"" + 111 + "\" style=\"position:absolute;background-color:#696969;padding:10px;display:none;\"><table style=\"font-size:13px;color:#fff\"cellspacing='10'><tr><td>"; 
			detailCourse += "��Ϣ��ȫ" + "[רҵ���޿γ�]" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ο���ʦ��"  + "</td>" + "<td>" + "ѧ�֣�" + "2.0" + "</td>" + "<td>" + "�Ͽ�ʱ�䣺" +"���ڶ���1-8�ܣ�ÿһ�ܣ�3-5��" + "</td></tr>";
			detailCourse += "<tr><td>" + "�ڿ�ѧԺ��" + "�����ѧԺ" + "</td>" + "<td>" + "�꼶��" + "2010��" + "</td>" + "<td>" + "���ң�" + "3����1-200" + "</td></tr>";
			detailCourse += "<tr><td>" + "רҵ��"  + "</td>" + "<td>" + "�༶��" + "�ƿ�1-3��" + "</td></tr>";
			detailCourse += "</table></div>";
$(window.parent.document.body).append(detailCourse);
addCoursediv("courseTable",3,3,3,1,"�ߵ���ѧ",123);	
addCoursediv("courseTable",3,3,3,1,"�ִ���ѧ",456);	
addCoursediv("courseTable",6,3,3,1,"���Դ���",789);	
addCoursediv("courseTable",3,3,3,1,"��Ϣ��ȫ",111);			
*/

});

/*
�ж������γ��Ƿ��ǰ����Ĺ�ϵ������ǰ����ʾ�Ƿ���ڸ��ǵ������������ڸ��ǵ����������0_index��1_index�����򷵻�-1
����: beginRow ��ʼ��
����: beginCol ��ʼ��
����: rows ��Խn��
����: cols ��Խn��
*/
function isContained(beginRow,beginCol,rows,cols){
   //ת����int����
	beginRow = parseInt(beginRow);
	beginCol = parseInt(beginCol);
	rows = parseInt(rows);
	for(var p in array)
	{
		var current_index = new Array();
		current_index = p.split("_");
		var cur_begin_row = parseInt(current_index[0]);
		var cur_begin_col = parseInt(current_index[1]);
		var cur_rows = parseInt(current_index[2]);
		var cur_cols = parseInt(current_index[3]);
		if(beginCol != cur_begin_col){//�����ͬ��,ֱ�ӷ���
			//break;
			
		}
		else{
				if(beginRow >= cur_begin_row && (beginRow + rows) <= (cur_begin_row + cur_rows)){ //����ӵĿγ̵�div�飬���Ѿ����ڵĿγ̵�div����ڲ�������0
					//break;
					return '0_' + p;
				}
				else if(beginRow <= cur_begin_row && (beginRow + rows) >= (cur_begin_row + cur_rows)){ //����ӵĿγ̵�div�飬���Ѿ����ڵĿγ̵�div����ⲿ������1
					//break;
					return '1_' + p;
				}
				
				
			}
			
	}
	return -1;
}
/*
begincol �γ����ڵ���
event ����¼�
exited_id ��ϸ�γ���Ϣ��div��id
����γ����������������գ���ʾ�γ̵���ϸ��Ϣʱ������������
*/
function show(begincol,event,exited_id){
		var offset = $(window.parent.document.getElementById('left_bar')).offset();
		var x =  offset.left;
		var y =  offset.top;
		var $detail = $(window.parent.document.getElementById(''+exited_id));
		if(begincol < 6)
		{
			
			$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
			//console.info(this.id);
			
		}
		else $detail.css("top",(y + 3) + "px").css("left",(x - $detail.width()) + "px");
		$detail.show();
}


function show2(begin,exited_id,width){
		var offset = $(window.parent.document.getElementById('left_bar')).offset();
		var x =  offset.left-1;
		//var y =  offset.top;
		var y = pageY($(window.parent.document.getElementById('left_bar'))[0])
		var $detail = $(window.parent.document.getElementById(''+exited_id));
		//console.info($detail.height());
		$detail.css("top",(y + begin) + "px").css("left",(x + 49) + "px").css("width",width+7 + "px");
		$detail.show();
}

/*
begincol �γ����ڵ���
event ����¼�
exited_id ��ϸ�γ���Ϣ��div��id
��ϸ��Ϣ�̶���ʾ������������ƶ�
*/
function showFixedDetial(begincol,event,exited_id){
		var offset = $(window.parent.document.getElementById('left_bar')).offset();
		var x = event.pageX + offset.left;
		var y = event.pageY + offset.top;
		var $detail = $(window.parent.document.getElementById(''+exited_id));
		if(begincol < 6)
		{
			
			$detail.css("top",(y + 3) + "px").css("left",(x + 3) + "px");
			//console.info(this.id);
			
		}
		else $detail.css("top",(y + 3) + "px").css("left",(x - $detail.width()) + "px");
		$detail.show();
}
/*
start:�γ̴ӵڼ��ڿ�ʼ
end:�γ̴ӵڼ��ڽ���
*/
function course_timebucket(start,end)
{
	return time_bucket_start[start] + "--" + time_bucket_end[end];
}
