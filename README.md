# playground-2

React Study 2기 실습용 리파지토리

## branch 명명 규칙

[영문이름]/[week].[sub version]_[title]

ex)
```
jaenam/01.01_test1  - 1주차 첫번째 브랜치
jaenam/03.02_test2  - 3주차 두번째 브랜치
```

git checkout -b iss53

git commit -a -m 'added a new footer [issue 53]'


https://git-scm.com/book/ko/v1/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EC%A0%80%EC%9E%A5%EC%86%8C
 https://rogerdudler.github.io/git-guide/index.ko.html
 git remote -v

 git push origin master


------------------------------
main.js :  dom render

app.js - header.js  :  전체선택 / 토글 toggleAll ----> TodoList (전체)
						입력 / 내용추가 addTodo 

		 -  TodoList : 삭제 / deleteTodo
	 			  	 더블클릭 수정 / startEdit 
	 			  	 엔터 다시저장 / saveTodo
	 			  	 수정취소 / cancelEdit 
	 			  	 토글 / toggleTodo

		- Footer.js  : 필터 selectFilter
						모두삭제 : deleteCompleted  			   






