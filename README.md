# fe-todo

## 설계
공통 
명령하세요: 가 나온다.

show$all
현재상태 :
-> 각 상태들의 총 개수를 적는다.
Todo 개수 count
: 객체에서 status가 todo인 것을 count

doing 개수 count
: 객체에서 status가 doing인 것을 count

done 개수 count
: 객체에서 status가 done인 것을 count

show$todo(재검토)
todo리스트: 
-> 상태가 todo인 것의 개수와 name, id를 보여준다.
Todo 개수 count
: 객체에서 status가 todo인 것을 count
Todo name, id
: 객체에서 status가 todo인 것의 이름과 id를 가져온다.

add${current.name}$[“favorite”]
add${name}$[tag].       ->      이 객체를 todos리스트에 추가하기(id : current.id에 1추가)
{current.name}1개가 추가되었습니다. (Id.show)
현재상태 : 기존 todo count + 1, doing 유지, done 유지

delete&{id번호}
리스트에서 id번호 searching후 current.name으로 설정
{current.name} todo가 목록에서 삭제됐습니다
현재상태 : 기존 todo count - 1, doing 유지, done 유지

update${id번호}$doing
리스트에서 id번호 searching후 current.name으로 설정
{current.name}가 doing으로 상태가 변경됐습니다
현재상태 : 기존 todo count - 1, doing + 1, done 유지


statusCount
배열의 크기를 3으로 만들어서 (idx)0, 1, 2 각각을 todo, doing, done count로 치환함.

status count의 length를 출력함 
배열을 map으로 돌면서 상태가 todo인 것의 name과 id 출력함.

