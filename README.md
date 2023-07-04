# fe-todo

## 설계
### 공통    
+ "명령하세요: " 출력.
+ statusID : 항상 update된 status의 ID를 저장하는 객체.
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

<br><br><br>

### add${current.name}${tag}
add${name}${tag}       ->      이 객체를 todos리스트에 추가하기(id : current.id에 1추가)   

statusID가 todo인 곳에 id를 push    

{current.name}1개가 추가되었습니다. (id 출력)   

현재상태 : statusID의 각 status에 대한 length 출력   

<br><br><br>

### delete&{id}   
statusID 객체에서 id존재 여부 확인 및 삭제(filter 후 깊은 복사)   

todos 배열에서 해당 id의 name을 {current.name}으로 설정   

{current.name} todo가 목록에서 삭제(filter 후 깊은 복사)   

현재상태 : statusID의 각 status에 대한 length 출력   

<br><br><br>

### update${id}${status}   
statusID 객체에서 id존재 여부 확인 및 수정(filter 후 깊은 복사)   

todos 배열에서 해당 id의 name을 {current.name}으로 설정   

{current.name}가 doing, done으로 상태가 변경됐습니다.   

{current.name} todo가 목록에서 수정(forEach)   

현재상태 : statusID의 각 status에 대한 length 출력   

