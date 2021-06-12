function [s,t] = zadatak124(sekvenca, A, f, T)
deltaT = 0.01;
ti = deltaT:deltaT:T;
s=[];
t=[];
for i = 1:length(sekvenca)
    indeks = sekvenca(i)+1;
    s = [s A(indeks)*cos(2*pi*f*ti)];
    t = [t ti+(i-1)*T];
end

    