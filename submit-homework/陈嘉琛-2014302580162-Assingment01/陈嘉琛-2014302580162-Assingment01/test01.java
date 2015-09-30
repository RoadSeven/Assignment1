package homeWork;


import java.io.File;
public class test01 {
	public static void main(String[] args){
		String url = "http://210.42.121.241/servlet/Svlt_QueryStuScore?year=0&term=&learnType=&scoreFlag=0";
		
		HttpRequest response = HttpRequest.get(url).header("Cookie","JSESSIONID=7B69929B4AE79064FAFC2A058C987043.tomcat2");
		
		response.receive(new File("result.html"));
		}
}

 