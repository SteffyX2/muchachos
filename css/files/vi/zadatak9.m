function[signal] = zadatak9(N,M)
x = [1,5,6,7];
y = [M,M,0,0];
x1 = [1,4,5,7];
y1=[0,0,N,N];



figure
signal = plot(x,y,x1,y1);
xlim([1 7])

if M>N
    ylim([0 M+1])
else ylim([0 N+1])
end

