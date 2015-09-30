package com.levi.javaLesson;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Test_01 {
	public static void main(String[] args) {
		
		//创建储存爬取内容的文件夹目录
		new File("./score/html").mkdirs();
		new File("./score/js").mkdirs();
		new File("./score/css").mkdirs();
		
		//创建一个列表存储所有需要抓取的文件的URL及存储的文件名
		NeedFile html 	   = new NeedFile("html/index.html", "http://210.42.121.133/servlet/Svlt_QueryStuScore?year=0&term=&learnType=&scoreFlag=0");
		NeedFile commonCSS = new NeedFile("css/style_common.css","http://210.42.121.133/css/style_common.css?v=2.002");
		NeedFile tabCSS	   = new NeedFile("css/tab.css","http://210.42.121.133/css/tab.css?v=2.002");
		NeedFile toolsJs   = new NeedFile("js/jquery.tools.min.js","http://210.42.121.133/js/jquery.tools.min.js");
		NeedFile tableJs   = new NeedFile("js/table.js","http://210.42.121.133/js/table.js?v=2.002");
		
		//将所有NeedFile存储在List中以便读取
		List<NeedFile> allFile = new ArrayList<NeedFile>();
		allFile.add(html);
		allFile.add(commonCSS);
		allFile.add(tabCSS);
		allFile.add(toolsJs);
		allFile.add(tableJs);
		
		//遍历列表
		Iterator<NeedFile> iterator = allFile.iterator();
		while (iterator.hasNext()) {
			NeedFile file = iterator.next();
			HttpRequest request = HttpRequest.get(file.getUrl())
					.header("Cookie","JSESSIONID=11718DB8D44C9CE64B8B85DC4348D966.tomcat2");
			File outFile = new File(file.getName());
			request.receive(outFile);
			//写入成功后提醒
			System.out.println(file.getName()+" is OK");
		}
		
	}
	
	//一个类用于储存需要下载的文件的文件名及URL
	public static class NeedFile{
		private String name;    //文件名字
		private String url;		
		
		public NeedFile(){};
		
		public NeedFile(String fileName,String url){
			this.name = "score/"+fileName;
			this.url = url;
		};
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = "score/"+name;
		}
		public String getUrl() {
			return url;
		}
		public void setUrl(String url) {
			this.url = url;
		}
	}
	
}
