t=0:0.01:10;

x1 = zeros(size(t));
x1(t>7 & t<10)=3;

x2 = zeros(size(t));
x2(t>1 & t<3)=2;


figure
plot(t,x1, t, x2)




x3 = x1+x2;
figure
plot(t,x3)



