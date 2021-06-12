function[signal] = zadatak10(N,M)
x = [1,2,3,4,5,6,7];
y = [0,M,M,0,M,M,0];
x1 = [1,2,3,5,6,7];
y1=[0,0,N,N,0,0];



figure
signal = plot(x,y,x1,y1);
xlim([1 7])

if M>N
    ylim([0 M+1])
else ylim([0 N+1])
end