function[s,t] = zadatak122(sekvenca, A, T, deltaT)
ti = deltaT:deltaT:T;
impuls = ones(size(ti));

s =[];
t=[];
for i = 1:length(sekvenca)
    s = [s impuls*A(sekvenca(i) + 1)];
    t = [t ti+(i-1)*T];
end 
end



