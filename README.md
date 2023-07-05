# fe-todo

## 설계
### 공통    
+ "명령하세요: " 출력.
+ statusID : 항상 update된 status의 ID를 저장하는 객체.

#### 예외처리   
+ 입력값을 '$'로 split했을 때 제일 처음 문자열이 'show', 'add', 'delete', 'update', 'exit'이 아니면 'show, add, delete, update, exit 명령어를 사용해주세요.' 출력.

<br><br><br>
### show${status}    

#### all
현재상태 :
-> 각 상태들의 총 개수를 적는다.   

Todo 개수 count
: 객체에서 status가 todo인 것을 count

doing 개수 count
: 객체에서 status가 doing인 것을 count

done 개수 count
: 객체에서 status가 done인 것을 count
<br><br><br>
         
#### todo, doing, done
{status}리스트   

-> {status}가 todo, doing, done에 따라 각 개수와 name, id를 보여준다.

#### 예외처리   
+ 입력값을 '$'로 split했을 때 두 번째 문자열이 'all', 'todo', 'doing', 'done'이 아니면 'show$<all, todo, doing, done 중 하나>를 입력해주세요.' 출력.   
<br><br><br>

### add${current.name}${tag}   

add${name}${tag}       ->      이 객체를 todos리스트에 추가하기(id : current.id에 1추가)   

statusID가 todo인 곳에 id를 push    

{current.name}1개가 추가되었습니다. (id 출력)   

현재상태 : statusID의 각 status에 대한 length 출력   

#### 예외처리   
+ 입력값을 '$'로 split 했을 때 두 번째 문자열과 세 번째 문자열 존재 여부 확인 후 경우에 따라 "add$\<todoName>$\["\<tag>"] 형식을 맞춰 입력해주세요.' 출력
+ 입력값을 '$'로 split 했을 때 세 번째 문자열이 있을 경우, tag의 형식이 \["<>"]이 아닐 경우 '태그의 형식을 \["\<tag>"]로 맞춰주세요.'출력

<br><br><br>

### delete${id}   
statusID 객체에서 id 삭제

todos 배열에서 해당 id의 name을 {current.name}으로 설정   

{current.name} todo가 목록에서 삭제

현재상태 : statusID의 각 status에 대한 length 출력   

#### 예외 처리   
+ 입력값을 '$'로 split했을 때 두 번째 문자열 존재 여부 확인 후 경우에 따라 "delete$\<id>" 형식을 맞춰 입력해주세요.' 출력
+ 입력하는 id가 todos 객체 배열에 있는지 확인 후 없으면 '요청하신 id가 todos 리스트에 없습니다.' 출력.

<br><br><br>

### update${id}${status}   
statusID 객체에서 id 수정

todos 배열에서 해당 id의 name을 {current.name}으로 설정   

{current.name}가 doing, done으로 상태가 변경됐습니다.   

{current.name} todo가 목록에서 수정(forEach)   

현재상태 : statusID의 각 status에 대한 length 출력   

   
#### 예외처리   
+ 입력값을 '$'로 split했을 때 두 번째 문자열과 세 번째 문자열 존재 여부 확인 후 세 번째 문자열이 'todo', 'doing', 'done'이 아니면 'update$\<id>$<todo, doing, done 중 하나>를 입력해주세요.' 출력.   
+ 입력값을 '$'로 split했을 때 두 번째 문자열이 todos 리스트에 없으면 '요청하신 id가 todos 리스트에 없습니다.'출력.  

