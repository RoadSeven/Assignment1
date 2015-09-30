import java.io.File;

import HttpRequest.HttpRequest;


public class ImageCrawler {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		//教务系统地址
		String url= "http://210.42.121.241/servlet/Svlt_QueryStuScore?year=0&term=&learnType=&scoreFlag=0&t=Mon%20Sep%2021%202015%2023:12:29%20GMT+0800%20(%D6%D0%B9%FA%B1%EA%D7%BC%CA%B1%BC%E4)";
		//cookie	
		HttpRequest response = HttpRequest.get(url).header("Cookie", "JSESSIONID=3AC6907DCAE5288310C32A9E7AF19241.tomcat2");
		//保存爬取结果,以html格式保存
		String  fName = "MyGrade.html";
		response.receive(new File(fName));
	}// close main

}
