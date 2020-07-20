var exp= /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
$(document).ready(function(){
	$("#send").click(function(){
		if($("#name").val()==""){
			alert("이름을 입력하세요");
			$("#name").focus();
			return false;
		}
		//아이디가 공백일때
		if($("#userid").val()==""){
			alert("아이디를 입력하세요");
			$("#userid").focus();
			return false;
		}
		//암호가 공백일때
		if($("#pwd").val()==""){
			alert("암호를 입력하세요");
			$("#pwd").focus();
			return false;
		}
		//암호확인이 공백일때
		if($("#pwd_check").val()==""){
			alert("암호확인 필수");
			$("#pwd_check").focus();
			return false;
		}
		//암호 일치확인
		if($("#pwd").val()!=$("#pwd_check").val()){
			alert("암호 불일치");
			$("#pwd_check").focus();
			return false;
		}
		//아이디와 암호가 DB 일치하지 않을때
		
		//전화번호 확인(정규식을 만들어놓고 비교)
		if(!$("#phone").val().match(exp)){
			alert("전화번호를 정확하게 입력하세요");
			$("#phone").focus();
			return false;
		}
		
		$("#frm").submit();
	})//send
	
	//아이디 중복체크 버튼을 눌렀을때
})//document