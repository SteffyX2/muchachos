function [signal] = impuls2(t,tau)
signal = zeros(size(t));
signal(t>=-tau & t<=tau)= abs(sin(2*pi*2*t(t>=-tau & t<=tau)));
