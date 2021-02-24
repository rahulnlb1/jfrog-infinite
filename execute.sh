F() {
    echo $1
    x=$(($1 + 1))
    sleep 1
    F $x
}

F 1
