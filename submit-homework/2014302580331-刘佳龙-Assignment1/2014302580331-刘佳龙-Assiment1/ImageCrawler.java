import HttpRequest.HttpRequest;
import java.io.File;

public class ImageCrawler {

	public static void main(String[] args) {
		//声明url
		String url = "http://210.42.121.241/css/style_common.css?v=2.002?v=2.002";
		//对象声明
		HttpRequest get =HttpRequest.get("http://210.42.121.241/servlet/Svlt_QueryStuScore?year=0&term=&learnType=&scoreFlag=0&t=Mon%20Sep%2021%202015%2000:46:46%20GMT+0800"); 
		String name = "F:/Get.html";     
		//获取cookie
		get.header("cookie", "JSESSIONID=32A1CB2401DFFB8DA1E4047725774458.tomcat2");
		if(get.ok()){
			get.receive(new File(name));
		}
		
	}

}
