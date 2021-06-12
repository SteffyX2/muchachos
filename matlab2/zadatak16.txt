t = 0:0.01:10;
x1 = zeros(size(t));
x2 = zeros(size(t));
x1(t>4 & t<9)=3;
x2(t>1 & t<6)=3;
figure
plot(t,x1,'r')
hold on
plot(t,x2,'b')

figure
x3 = x1 +x2;
plot(t,x3)
