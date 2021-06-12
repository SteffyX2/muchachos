br_harm = 20;
n = 0:br_harm;
tau_kroz_t = 0.3;
E = 3;
T = 0.2;
omega = 2*pi/T;
sn = E*tau_kroz_t*sinc(n*tau_kroz_t);
t = -2:0.01:2;
harmonici = zeros(br_harm+1, length(t));
for i = 1:length(n)
    if n(i)==0
        a_n = real(sn(i));
    else
        a_n = 2*real(sn(i));
    end
    harmonici(i,:) = a_n.*cos(n(i)*omega*t);
end

subplot(3,1,1)
plot(t,sum(harmonici(1:4,:)))
title('na osnovu prvih 3')

subplot(3,1,2)
plot(t,sum(harmonici(1:11,:)))
title('na osnovu prvih 10')

subplot(3,1,3)
plot(t,sum(harmonici(1:21,:)))
title('na osnovu prvih 20')

