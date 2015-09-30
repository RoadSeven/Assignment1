package Assignment;
import java.io.File;
public class Assignment {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String strURL ="http://210.42.121.241/servlet/Svlt_QueryStuScore?year=0&term=&"
					+ "learnType=&scoreFlag=0&t=Tue%20Sep%2022%202015%2016:07:06%20GMT+080"
					+ "0%20(%D6%D0%B9%FA%B1%EA%D7%BC%CA%B1%BC%E4)";
		String filePath="Assignment1.html";
		
		HttpRequest response = HttpRequest.get(strURL);
		response.header("Cookie","JSESSIONID=85A54FB681E33A058AE9B5A5BFF856EC.tomcat2");
		response.receive(new File(filePath));
		
	}

}
