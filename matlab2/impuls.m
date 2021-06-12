function[signal] = impuls(t, A, tau) 
signal = zeros(size(t));
signal(t>=-tau & t<=0)=-A;
signal(t>0 & t<= tau)=A;
