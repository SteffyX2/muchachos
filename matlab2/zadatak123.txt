function [s, t] = zadatak123(sekvenca, A, T)
deltaT = 0.001;
ti = deltaT:deltaT:T;
impuls = ones(size(ti));

s = []; t = [];

for i = 1:length(sekvenca)
    indeks = sekvenca(i)+1;
    signal = impuls*A(indeks);
    signal(ti > T/2) = 0;
    s = [s signal];
    t = [t ti+(i-1)*T];
end


    
