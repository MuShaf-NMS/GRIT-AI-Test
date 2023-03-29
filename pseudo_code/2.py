fibonacci = [0, 1]
pos = 2
while len(fibonacci) < 20:
  fibonacci.append(fibonacci[pos-2]+fibonacci[pos-1])
  pos+=1
print(fibonacci)